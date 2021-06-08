import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

const mockHeadingOne = `
{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[],
      "value":"Heading 1",
      "nodeType":"text"
    }
  ],
  "nodeType":"heading-1"
}`;

const mockHeadingTwo = `
{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[],
      "value":"Heading 2",
      "nodeType":"text"
    }
  ],
  "nodeType":"heading-2"
}`;

const mockHeadingThree = `
{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[],
      "value":"Heading 3",
      "nodeType":"text"
    }
  ],
  "nodeType":"heading-3"
}`;

const mockParagraph = `
{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[],
      "value":"This is sample paragraph ",
      "nodeType":"text"
    }
  ],
  "nodeType":"paragraph"
}`;

export const mockParagraphWithLink = `
{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[],
      "value":"This is sample paragraph ",
      "nodeType":"text"
    },
    {
      "nodeType":"hyperlink",
      "content":[
        {
          "nodeType":"text",
          "value":"with a link",
          "marks":[],
          "data":{}
        }
      ],
      "data":{
        "uri":"/foo"
      }
    }
  ],
  "nodeType":"paragraph"
}`;

export const mockContent = {
  raw: `{
      "data":{},
      "content":[
        ${mockHeadingOne},
        ${mockHeadingTwo},
        ${mockHeadingThree},
        ${mockParagraph},
        ${mockParagraphWithLink}
      ],
      "nodeType":"document"
    }`,
} as RenderRichTextData<ContentfulRichTextGatsbyReference>;
