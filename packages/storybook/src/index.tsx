import React from 'react';
import {storage, renderer, Pattern, TwingRenderer} from '@wingsuit-designsystem/pattern';
import {configure as storybookConfigure, storiesOf, addParameters} from '@storybook/react';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';
import wingsuitTheme from './theme';
import '@storybook/addon-docs/register';
import PatternPreview from './components/PatternPreview';
import PatternProperties from './docs/PatternProperties';
import {
  Title,
  Subtitle,
  Description,
  Primary,
} from '@storybook/addon-docs/blocks';
import {PatternStories} from "./docs/PatternStories";
import {PatternInclude} from "./docs/PatternInclude";

function getStorybookKnobsOptions(setting) {
  const options: {} = setting.getOptions();
  let knobsOption = {};

  if (setting.isRequired() === false) {
    knobsOption = {
      Empty: ''
    };
  }
  Object.keys(options).forEach((key) => {
    const paramKey = options[key] != null ? options[key] : key;
    knobsOption[paramKey] = key;
  })
  return knobsOption;
}

export function configure(module: NodeModule, storybookContext, dataContext, templateContext, namespaces) {
  // Theming
  addParameters({
    options: {
      theme: wingsuitTheme,
    },
  });
  storage.setNamespaces(namespaces);
  storage.createDefinitionsFromMultiContext(storybookContext);
  storage.createTwigStorageFromContext(templateContext);
  storage.createGlobalsFromContext(dataContext);
  renderer.setRenderer(new TwingRenderer());
  storybookConfigure(() => {
    // Load stories from wingusit.yml.
    const patternIds = storage.getPatternIds();
    patternIds.forEach((patternId) => {
      const pattern = storage.loadPattern(patternId);
      if (pattern.isVisible('storybook')) {
        getStories(pattern, module);
      }
    });

    // Load stories form storybook app.
    const allExports: any = [];
    if (Array.isArray(storybookContext) === false) {
      storybookContext.keys().forEach((key) => {
        if (storybookContext(key).default !== null) {
          allExports.push(storybookContext(key))
        }

      });
    } else {
      storybookContext.forEach((innerContext) => {
        innerContext.keys().forEach((key) => {
          if (innerContext(key).default != null) {
            allExports.push(innerContext(key))
          }
        });
      })
    }
    return allExports;
  }, module);
}

function getProps(variant) {
  const knobsVariables = [];
  const groupSetting = 'Settings';
  Object.keys(variant.getSettings()).forEach((key) => {
    const setting = variant.getSetting(key);
    if (setting.isEnable()) {
      if (setting.getType() === 'select') {
        knobsVariables[key] = select(
          setting.getLabel(),
          getStorybookKnobsOptions(setting),
          setting.getPreview(), groupSetting
        );
      } else if (setting.getType() === 'boolean') {
        knobsVariables[key] = boolean(setting.getLabel(), setting.getPreview(), groupSetting);
      } else if (setting.getType() === 'number') {
        knobsVariables[key] = number(setting.getLabel(), setting.getPreview(), undefined, groupSetting);
      } else {
        knobsVariables[key] = text(setting.getLabel(), setting.getPreview(), groupSetting);
      }
    }
  });
  const groupFields = 'Fields';
  Object.keys(variant.getFields()).forEach((key) => {
    const field = variant.getField(key);
    if (field.getType() !== 'pattern') {
      knobsVariables[key] = text(field.getLabel(), field.getPreview(), groupFields);
    }
  });
  return knobsVariables;
}

function getStories(pattern: Pattern, module) {
  const patternLabel = `${pattern.getNamespace()}/${pattern.getLabel()}`;
  const story = storiesOf(patternLabel, module);
  story.addDecorator(withKnobs);

  Object.keys(pattern.getPatternVariants()).forEach((variantKey) => {
    const variant = pattern.getVariant(variantKey);
    let parameters = {
      component: PatternPreview,
      notes: variant.getDescription(),
      componentSubtitle: pattern.getDescription(),
      docs: {
        patternVariant: variant,
        page: () => (
          <>
            <Title/>
            <Subtitle/>
            <Description/>
            <Primary/>
            <PatternProperties/>
            <PatternInclude/>
            <PatternStories/>
          </>
        ),
        storyDescription: variant.getDescription()
      }
    };
    parameters = Object.assign(parameters, pattern.getParameters());
    story.add(
      variant.getLabel(), () =>
        <PatternPreview patternId={pattern.getId()}
                        variantId={variantKey} {...getProps(variant)}></PatternPreview>,
      parameters
    )
  });
  return story;
}

export {default as RenderTwig} from './components/RenderTwig';
export {default as PatternPreview} from './components/PatternPreview';