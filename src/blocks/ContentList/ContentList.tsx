// import React from "react";
import { graphql } from "gatsby";
// import { ContentListFragmentFragment } from "@/graphql/graphql-types";
// import { Container } from "@/components/Container";
// import { Heading } from "@/components/Heading";
// import { RichText, RichTextContent } from "@/components/RichText";
// import { Button } from "@/components/Button";

// import styles from "./ContentList.module.css";

// interface ContentListProps {
//   readonly data: ContentListFragmentFragment;
// }

// export function ContentList({
//   data: { title, content, raiButton, listTitle, raiList },
// }: ContentListProps) {
//   return (
//     <div className={styles.wrapper}>
//       <Container>
//         <div className={styles.container}>
//           <div className={styles.content}>
//             <Heading>{title}</Heading>
//             <RichText content={content as RichTextContent} />
//             {raiButton?.action?.enabled && (
//               <Button
//                 title={raiButton?.action?.title as string}
//                 url={raiButton?.action?.url as string}
//                 external={raiButton?.action?.external as boolean}
//               />
//             )}
//           </div>
//           <div className={styles.list}>
//             <Heading as="h3">{listTitle}</Heading>
//             {raiList?.items && (
//               <ul className={styles.ul}>
//                 {raiList.items.map((item) => (
//                   <li className={styles.item} key={item}>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

export const ContentListFragment = graphql`
  fragment ContentListFragment on ContentfulBlockContentList {
    __typename
    id
    title
  }
`;
