import React, { useEffect, useState, useRef } from "react";
// Chakra imports
import {
  Flex,
  Image,
  Text,
  Avatar,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";
import { MdMoreHoriz } from 'react-icons/md'
import Transfer from "components/dataDisplay/Transfer";
import Card from "components/card/Card.js";
import { dateDiff } from './until.js';
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar7.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import Nft5 from 'assets/img/nfts/Nft5.png'
import NFT from 'components/card/NFT'
import collectIcon from 'assets/img/users/collectIcon.png'
import commentIcon from 'assets/img/users/commentIcon.png'
import expandIcon from 'assets/img/users/expandIcon.png'
import DateUploaded from "./MainMenu";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import {
  getComments,
  writeComment,
} from '../../../../../../hook/hook'
export default function Comments(props) {
  const { gpId } = props;
  const uId = localStorage.getItem('uId')
  const [isShow, ShowFun] = useState(false)
  const [CommentsDate, setCommentsDate] = useState([])
  const [content, setContent] = useState(BraftEditor.createEditorState('null'))
  const [grId, setgrId] = useState("")
  const [parentId, setParentId] = useState("")
  const [rootParentId, setRootParentId] = useState("")
  const [page, setPage] = useState("1")
  const [pageSize, setPageSize] = useState("5")
  const [sort, setSort] = useState("")
  const toast = useToast();
  useEffect(() => {
    getComments(gpId, page, pageSize, sort).then((res) => {
      setCommentsDate(res.data.data.records)
    })
  }, [])
  return (
    <div style={{
      background: "#111C44",
      borderRadius: "24px",
      margin: "45px 0 45px",
      padding: "32px 16px"
    }}>
      <Flex justifyContent="space-between" mb="12px">
        <Text
          color=" rgba(255,255,255,1)"
          fontSize="24px"
          fontWeight=" 500"
          textAlign="left"
          lineHeight="32px"
          as="span"
          marginBottom='20px'>
          Comments
        </Text>
        <DateUploaded></DateUploaded>
      </Flex>
      <Card direction='column' w='100%' p='0px' bgColor='transparent' >
        <Box>
          {
            CommentsDate.map((item, key) => {
              return (
                <Flex key={key}
                  w='100%'
                  padding='20px 16px'
                  mb="12px"
                  borderRadius='12px'
                  pr={{ base: "5px", "2xl": "20%" }}
                  _hover={{ bgColor: 'rgba(228, 228, 228, 0.1)' }}
                >
                  <Avatar h='48px' w='48px' src={item.img} me='14px' mr="14px" />
                  <Box onClick={() => {
                    getComments(gpId, ' ', ' ', sort).then((res) => {
                      setCommentsDate(res.data.data.records)
                    })
                  }}>
                    More
                  </Box>
                  <Box>
                    <Box fontSize="13px" >
                      <Text as="span" color="#5F75EE">{item.userName}</Text>
                      <Text as="span" color="#B2B3BD" ml="3">{dateDiff(item.time, null)}</Text>
                    </Box>
                    <Text
                      m="10px 0"
                      color="#B2B3BD"
                      fontSize="14px"
                      lineHeight="24px"
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </Text>
                    <Flex>
                      {/* <Image src={commentIcon}></Image>
                        <Image m="0 16px" src={collectIcon}></Image>
                        <Image src={expandIcon}></Image> */}
                    </Flex>
                  </Box>
                </Flex>
              )
            })
          }
        </Box>
        <BraftEditor
          contentStyle={{ height: 100 }}
          language="en"
          value={content}
          style={{
            border: '1px solid rgba(225, 225, 225, 0.2)',
            marginBottom: '20px'
          }}
          MaxLength="5"
          onChange={(editorState) => {
            setContent(editorState)
          }}
          placeholder="comment length should be above 10 and below 500 characters."
        />
        <Button
          variant="brand"
          width="180px"
          height="56px"
          m="32px auto"
          fontWeight="400"
          fontSize="14px"
          onClick={() => {
            if (!uId) {
              toast({
                title: `please sign in`,
                position: "top",
                status: "warning",
                isClosable: true,
                duration: 1000,
              });
              return
            }
            writeComment(content.toHTML(), gpId, grId, parentId, rootParentId, "", uId).then((res) => {
              if (res.data.code == 200) {
                setContent(" ");
                getComments(gpId, page, pageSize, sort).then((res) => {
                  setCommentsDate(res.data.data.records)
                })
              } else {

              }
            })
          }
          }
        > Write comment</Button>
      </Card>
    </div >


  );
}
