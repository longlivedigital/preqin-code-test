"use client";

import axios, { AxiosError } from "axios";
import { Box, Button, Flex, Input, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import ls from "local-storage";

import { ErrorMessage } from "./ErrorMessage";
import { Method } from "./types/Method";
import useFetch from "./utils/useFetch";

export default function BasePage() {
  const [userName, setUserName] = useState("dummydatafeeds@preqin.com");
  const [apiKey, setAPIKey] = useState("8f0bc69bc2a643f8bb8034a15081962e");
  const [accessToken, setAccessToken] = useState("");

  const { data, loading, error, fetchData } = useFetch({
    method: Method.POST,
    autoFetch: false,
  });

  // Check on load if access token exists
  useEffect(() => {
    const at = ls("accessToken");
    if (typeof at === "string") {
      setAccessToken(at);
    }
  }, []);

  // Set access token when user clicks button and data is loaded
  useEffect(() => {
    if (data?.access_token) {
      ls("accessToken", data.access_token);
      setAccessToken(data.access_token);
    }
  }, [data]);

  const onClickAuth = () => {
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("apiKey", apiKey);

    fetchData({
      url: "/connect/token",
      body: formData,
    });
  };

  return (
    <Flex alignContent="center" justifyContent="center">
      <Stack background="gray.100" padding="10px">
        <Input
          background="white"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
        <Input
          background="white"
          placeholder="API Key"
          value={apiKey}
          onChange={(e) => setAPIKey(e.currentTarget.value)}
        />
        <Button colorScheme="blue" onClick={onClickAuth} isLoading={loading}>
          Set access token
        </Button>

        {error && (
          <ErrorMessage
            title="There was a problem getting access token"
            message={error.message}
          />
        )}

        {accessToken && (
          <Box padding="20px 0">
            <Link as={NextLink} colorScheme="blue" href="/investors">
              See investors
            </Link>
          </Box>
        )}
      </Stack>
    </Flex>
  );
}
