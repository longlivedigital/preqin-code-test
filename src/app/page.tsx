"use client";

import axios, { AxiosError } from "axios";
import { Box, Button, Flex, Input, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import ls from "local-storage";

import { ErrorMessage } from "./ErrorMessage";
import { Method } from "./types/Method";

export default function BasePage() {
  const [userName, setUserName] = useState("dummydatafeeds@preqin.com");
  const [apiKey, setAPIKey] = useState("8f0bc69bc2a643f8bb8034a15081962e");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const at = ls("accessToken");
    if (typeof at === "string") {
      setAccessToken(at);
    }
  }, []);

  const onClickAuth = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("apiKey", apiKey);

    axios({
      method: Method.POST,
      url: "/connect/token",
      data: formData,
    })
      .then((res: any) => {
        const { access_token } = res.data;
        ls("accessToken", access_token);
        setAccessToken(access_token);
      })
      .catch((err: any) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
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
