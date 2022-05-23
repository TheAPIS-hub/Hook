import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Image,
    Icon,
    Text,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
  } from "@chakra-ui/react";
  import TwitterHeader from '../../../../../../assets/img/logo/Header.png'
  import contentImg from '../../../../../../assets/img/logo/gameThree.png'

  export default function Twitter(){
    const [TwitterData, setTwitterData] = useState([
        {
         
            name:'Bridgerew',
            TwitterName:'DaBaby problem',
         img:TwitterHeader,
         Time:'3m',
         content:'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s'
        },
        {
         
            name:'Bridgerew',
            TwitterName:'DaBaby problem',
         img:TwitterHeader,
         Time:'3m',
         content:'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s'
        },
        {
         
            name:'Bridgerew',
            TwitterName:'DaBaby problem',
         img:TwitterHeader,
         Time:'3m',
         contentImg:contentImg,
         content:'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s'
        },
        {
         
            name:'Bridgerew',
            TwitterName:'DaBaby problem',
         img:TwitterHeader,
         Time:'3m',
         content:'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s'
        },
        {
         
            name:'Bridgerew',
            TwitterName:'DaBaby problem',
         img:TwitterHeader,
         Time:'3m',
         content:'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s'
        },
        {
         
            name:'Bridgerew',
            TwitterName:'DaBaby problem',
         img:TwitterHeader,
         Time:'3m',
         content:'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s'
        },
   
      ]);
      return(
          <Box>
               <Box
        style={{
          color: " rgba(255,255,255,1)",
          fontSize: "24px",
          fontWeight: " 500",
          textAlign: "left",
          lineHeight: "32px",
          marginBottom:'61px'
        }}
      >
       Twitter
      </Box>
      <Box>
          {TwitterData.map((item,index)=>{
              return(
                  <Box style={{
                    display:'flex',
                    verticalAlign: 'top',
                    marginBottom:'37px'
                  }}>
                      <Box>
                      <img style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    marginRight:'20px'
                }}  src={item.img} alt="" />
                      </Box>
                      <Box >
                          <Box style={{
                              marginBottom:'21px',
                              display:'flex',
                              alignItems:'center',

                          }}>
                              <Text style={{
                                   color: 'rgba(255,255,255,1)',
                                   fontSize: '14px',
                                   fontWeight:' 700',
                                   textAlign: 'left',
                                   marginRight:'6px'
                              }}>{item.name}</Text>
                              <Text style={{
                                   color: 'rgba(178,179,189,1)',
                                   fontSize: '13px',
                                   fontWeight: '400',
                                   textAlign: 'left',
                                   marginRight:'6px'
                              }}>@{item.TwitterName}</Text>
                              <Text style={{
                                   color: 'rgba(178,179,189,1)',
                                   fontSize: '13px',
                                   fontWeight: '400',
                                   textAlign: 'left',
                              }}>.{item.Time}ago</Text>
                          </Box>
                          <Box  style={{
                              width:' 349px',
                              borderRadius: '20px 20px 20px 4px',
                              background:' rgba(228,228,228,0.1)',
                              padding:'16px 24px',
                              boxSizing:'border-box',
                            //   index === 1 ? {background: "blue"} : { background:'rgba(228,228,228,0.1)'}
                          }}
                          
                          
                          >
                              <Box style={{
                                  color: 'rgba(255,255,255,0.6)',
                                  fontSize: '14px',
                                  fontWeight:' 400',
                                  textAlign:' left',
                                  lineHeight: '24px',
                              }}>
                                  {item.content}
                                  <img style={{
                    width: '306px',
                 marginTop:'7px'
                }}  src={item.contentImg} alt="" />
                              </Box>
                          </Box>
                      </Box>
                  </Box>
              )
          })

          }
      </Box>
          </Box>
      )
  }