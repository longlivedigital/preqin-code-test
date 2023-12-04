import { WarningIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const ErrorMessage = ({
  title,
  message,
}: {
  title: string;
  message?: string;
}) => {
  return (
    <Flex alignContent="center" justifyContent="center">
      <Box textAlign="center" padding="20px">
        <WarningIcon color="red.600" boxSize={16} />
        <Heading>{title}</Heading>
        <Text>{message}</Text>
      </Box>
    </Flex>
  );
};
