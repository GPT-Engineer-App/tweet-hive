import React, { useState } from "react";
import { Box, VStack, HStack, Avatar, Text, Textarea, Button, Divider } from "@chakra-ui/react";
import { FaTwitter, FaHeart, FaRetweet, FaComment } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      setTweets([...tweets, { id: Date.now(), content: newTweet }]);
      setNewTweet("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" py={8}>
      <HStack mb={8}>
        <FaTwitter color="#1DA1F2" size={32} />
        <Text fontSize="2xl" fontWeight="bold">
          Twitter Clone
        </Text>
      </HStack>
      <Box mb={8}>
        <Textarea value={newTweet} onChange={(e) => setNewTweet(e.target.value)} placeholder="What's happening?" resize="none" mb={2} />
        <Button colorScheme="twitter" onClick={handleTweetSubmit}>
          Tweet
        </Button>
      </Box>
      <VStack spacing={4} align="stretch">
        {tweets.map((tweet) => (
          <Box key={tweet.id} borderWidth={1} borderRadius="md" p={4}>
            <HStack mb={2}>
              <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMjc2MDI0Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Text fontWeight="bold">User</Text>
            </HStack>
            <Text mb={4}>{tweet.content}</Text>
            <HStack>
              <Button leftIcon={<FaHeart />} variant="ghost">
                Like
              </Button>
              <Button leftIcon={<FaRetweet />} variant="ghost">
                Retweet
              </Button>
              <Button leftIcon={<FaComment />} variant="ghost">
                Comment
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
