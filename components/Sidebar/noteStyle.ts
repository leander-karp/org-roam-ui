import { css } from '@linaria/core';

const defaultNoteStyle = {
  '.katex': { overflowX: 'scroll' },
  ol: {
    paddingLeft: 4,
    py: 1,
  },
  'li::marker': {
    fontSize: 12,
    fontWeight: 'bold',
  },
  li: {
    pt: 1,
  },
  ul: {
    paddingLeft: '5',
  },
  p: {
    fontSize: '14',
    fontWeight: '500 !important',
    pb: 2,
  },
  div: {
    hyphens: 'auto !important',
  },
  '.title': {
    textAlign: 'center',
    marginBottom: '.2em',
  },
  '.subtitle': {
    textAlign: 'center',
    fontSize: 'medium',
    fontWeight: 'bold',
    marginTop: 0,
  },
  '.TODO': { color: 'red.500' },
  '.equationContainer': {
    display: 'table',
    textAlign: 'center',
    width: '100%',
  },
  '.equation': {
    verticalAlign: 'middle',
  },
  '.equation-label': {
    display: 'tableCell',
    textAlign: 'right',
    verticalAlign: 'middle',
  },
  '.inlinetask': {
    padding: '10px',
    border: '2px solid gray',
    margin: '10px',
    background: '#ffffcc',
  },
  '#org-div-home-and-up': {
    textAlign: 'right',
    fontSize: '70 % ',
    whiteSpace: 'nowrap',
  },
  textarea: { overflowX: 'auto' },
  '.linenr': { fontSize: 'smaller' },
  '.org-info-js_info-navigation': { borderStyle: 'none' },
  '#org-info-js_console-label': {
    fontSize: '10px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  '.org-info-js_search-highlight': {
    backgroundColor: '#ffff00',
    color: '#000000',
    fontWeight: 'bold',
  },
  '.org-svg': { width: '90%' },
  '.DONE': { color: 'green' },
  '.priority': { fontFamily: 'monospace', color: 'orange' },
  '.tag': {
    backgroundColor: 'white',
    fontFamily: 'monospace',
    padding: '2px',
    fontSize: '80%',
    fontWeight: 'normal',
  },
  '.timestamp': { color: '#bebebe' },
  '.timestamp-kwd': { color: '#5f9ea0' },
  '.org-right': { marginLeft: 'auto', marginRight: '0px', textAlign: 'right' },
  '.org-left': { marginLeft: '0px', marginRight: 'auto', textAlign: 'left' },
  '.org-center': {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  '.underline': { textDecoration: 'underline' },
  '#postamble p': { fontSize: '90%', margin: '.2em' },
  '#preamble p': { fontSize: '90%', margin: '.2em' },
  'p.verse': { marginLeft: '3%' },
  pre: {
    //border: '1px solid #e6e6e6',
    borderRadius: '3px',
    backgroundColor: 'white',
    padding: '8pt',
    fontFamily: 'monospace',
    overflow: 'auto',
    margin: '1.2em',
  },
  'pre.src': {
    position: 'relative',
    overflow: 'auto',
  },
  'pre.src:before': {
    display: 'none',
    position: 'absolute',
    top: '-8px',
    right: '12px',
    padding: '3px',
    //color: '#555',
    backgroundColor: 'white',
  },
  'caption.t-above': { captionSide: 'top' },
  'caption.t-bottom': { captionSide: 'bottom' },
  'th.org-right': { textAlign: 'center' },
  'th.org-left': { textAlign: 'center' },
  'th.org-center': { textAlign: 'center' },
  'td.org-right': { textAlign: 'right' },
  'td.org-left': { textAlign: 'left' },
  'td.org-center': { textAlign: 'center' },
  '.footpara': { display: 'inline' },
  '.footdef': { marginBottom: '1em' },
  '.figure': { padding: '1em' },
  '.figure p': { textAlign: 'center' },
  '.math.math-display .katex': {
    overflow: 'auto',
    minHeight: '1.5em',
  },
};

export const viewerNoteStyle = css`
  ${defaultNoteStyle};

  .headingFlex {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .outlineHeadingButton {
    display: none;
  }

  h1 {
    line-height: 1.2;
    font-size: 16px;
    font-weight: bold;
    padding-top: 0.5rem;
  }

  h2 {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding-top: 0.5rem;
  }

  h3 {
    font-size: 13px;
    padding-top: 0.5rem;
  }

  h4 {
    font-size: 12px;
    font-style: italic;
    padding-top: 0.5rem;
  }

  .sectionContent {
    padding-top: 0.5rem;
  }
`;

export const outlineNoteStyle = css`
  ${defaultNoteStyle};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-left: 0.25rem;
    line-height: 1.25;
    font-size: 15px;
    font-weight: 700;
  }

  & > div > p {
    margin-top: 0.5rem;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    padding-bottom: 0.5rem;
  }

  .sec {
    padding-top: 0.25rem;
  }

  .viewerHeadingButton {
    display: none;
  }

  .headingFlex {
    flex-direction: row;
    justify-content: flex-start;
  }

  .sectionContent {
    margin-top: 0.75rem;
    padding-left: 1rem;
    margin-left: 11px;
    border-left-width: 1px;
    border-left-color: var(--theme-color-gray-500);
  }
`;
