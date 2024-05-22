import { Container, Text, VStack, Box, Heading, Flex, Button, IconButton } from "@chakra-ui/react";
import { FaWhatsapp, FaRobot, FaLanguage, FaTools } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to Your Personal Autoresponder
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Automate your messaging with customizable responses and AI integration.
        </Text>
        <Flex direction="column" align="center" width="100%">
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mb={4}>
            <Flex align="center">
              <IconButton aria-label="WhatsApp" icon={<FaWhatsapp />} size="lg" mr={4} />
              <Text fontSize="xl">Auto-reply to WhatsApp or WA Business</Text>
            </Flex>
          </Box>
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mb={4}>
            <Flex align="center">
              <IconButton aria-label="Customizable Responses" icon={<FaTools />} size="lg" mr={4} />
              <Text fontSize="xl">Individually customizable responses</Text>
            </Flex>
          </Box>
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mb={4}>
            <Flex align="center">
              <IconButton aria-label="Automation Tools" icon={<FaRobot />} size="lg" mr={4} />
              <Text fontSize="xl">Basic automation tools</Text>
            </Flex>
          </Box>
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mb={4}>
            <Flex align="center">
              <IconButton aria-label="Welcome Message" icon={<FaRobot />} size="lg" mr={4} />
              <Text fontSize="xl">A welcome message for new chats</Text>
            </Flex>
          </Box>
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mb={4}>
            <Flex align="center">
              <IconButton aria-label="AI Integration" icon={<FaRobot />} size="lg" mr={4} />
              <Text fontSize="xl">AI integration with ChatGPT/GPT-3/GPT-4 or Dialogflow.com</Text>
            </Flex>
          </Box>
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mb={4}>
            <Flex align="center">
              <IconButton aria-label="Multiple Languages" icon={<FaLanguage />} size="lg" mr={4} />
              <Text fontSize="xl">Support for multiple languages</Text>
            </Flex>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;