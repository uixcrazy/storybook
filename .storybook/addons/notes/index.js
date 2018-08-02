import addons, { makeDecorator } from '@storybook/addons';
import { ADD_NOTES_EVENT } from './constants';
import marked from 'marked';

function renderMarkdown(text, options) {
  marked.setOptions({ ...marked.defaults, options });
  return marked(text);
}

export const withNotes = makeDecorator({
  name: 'withNotes',
  parameterName: 'notes',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();

    const storyOptions = parameters || options;

    const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;

    if (!text && !markdown) {
      throw new Error('You must set of one of `text` or `markdown` on the `notes` parameter');
    }

    channel.emit(ADD_NOTES_EVENT, text || renderMarkdown(markdown, markdownOptions));

    return getStory(context);
  },
});

export const withMarkdownNotes = (text, options) =>
  withNotes({
    markdown: text,
    markdownOptions: options,
  });
