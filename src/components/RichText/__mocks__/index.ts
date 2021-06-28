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

export const mockParagraph = `
{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[],
      "value":"A robot may not injure a human being or, through inaction, allow a human being to come to harm ",
      "nodeType":"text"
    },
    {
      "data":{},
      "marks":[{"type":"bold"}],
      "value":"To boldly go where no robot has gone before. ",
      "nodeType":"text"
    },
    {
      "data":{},
      "marks":[{"type":"underline"}],
      "value":"The underlying problem with robots is that they are robots. ",
      "nodeType":"text"
    },
    {
      "data":{},
      "marks":[{"type":"italic"}],
      "value":"The Robot R1 is an italian humanoid. ",
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

export const mockStrongParagraph = `
{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[{"type":"bold"}],
      "value":"Dummy strong content ",
      "nodeType":"text"
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

export const dummyContent = {
  raw: `{
        "data":{},
        "content":[
          ${mockParagraph}
        ],
        "nodeType":"document"
      }`,
};

// {
//   "data":{},
//   "content":[
//     {
//       "data":{},
//     "content":[
//       {
//         "data":{},
//         "marks":[{"type":"bold"}],
//         "value":"This text should be bold",
//         "nodeType":"text"
//       },
//       {
//         "data":{},
//         "marks":[],
//         "value":", ",
//         "nodeType":"text"
//       },
//       {
//         "data":{},
//         "marks":[{"type":"italic"}],
//         "value":"This text should be italic",
//         "nodeType":"text"
//       },
//       {
//         "data":{},
//         "marks":[],
//         "value":", ",
//         "nodeType":"text"
//       },
//       {
//         "data":{},
//         "marks":[{"type":"underline"}],
//         "value":"This text should be underlined",
//         "nodeType":"text"
//       },
//       {
//         "data":{},
//         "marks":[],
//         "value":", sed do errus mod tempor in conduit ut laboratory et deplore electromagna aliqua. Ut enim ad minimum veniam, quis no indestruct exoform ullamco laboris nisi ut alius equip ex ea commando evaluant. Duis ex machina aute ire dolorus in scan detectus an voluptate volt esse cesium dolore eu futile nulla parameter. Execute primus sint occaecat cupidatat non proident, sunt in culpa qui technia deserunt mondus anim id est proceus.",
//         "nodeType":"text"
//       }
//     ],
//     "nodeType":"paragraph"
//   }
// ],
// }
