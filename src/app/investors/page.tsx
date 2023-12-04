"use client";

import useFetch from "@/app/utils/useFetch";
import {
  Flex,
  Heading,
  Link,
  Spinner,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Method } from "../types/Method";
import { Investor } from "../types/Investor";
import { ErrorMessage } from "../ErrorMessage";

const INVESTORS = [2670, 2792, 332, 3611];

export default function Investors() {
  const { data, loading, error } = useFetch({
    url: "/api/Investor",
    query: { firmID: INVESTORS.join(",") },
  });

  const investors: Investor[] = data?.data;

  if (error) {
    return (
      <ErrorMessage
        title="There was a problem loading list of investors"
        message={error.message}
      />
    );
  }

  return (
    <Flex height="100vh" alignContent="center" justifyContent="center">
      <Stack background="gray.100" padding="10px">
        <Heading>Investors</Heading>

        <TableContainer>
          <Table variant="simple">
            <TableCaption>List of Investors</TableCaption>
            <Thead>
              <Tr>
                <Th>FirmId</Th>
                <Th>FirmName</Th>
                <Th>Type</Th>
                <Th>Date Added</Th>
                <Th>Address</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {loading && (
                <Tr>
                  <Td colSpan={6}>
                    <Spinner size="xl" />
                  </Td>
                </Tr>
              )}

              {investors?.map((investor) => (
                <Tr key={investor.firmID}>
                  <Td>{investor.firmID}</Td>
                  <Td>{investor.firmName}</Td>
                  <Td>{investor.firmType}</Td>
                  <Td>-</Td>
                  <Td>{investor.address}</Td>
                  <Td>
                    <Link href={`/investors/${investor.firmID}`}>See more</Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Flex>
  );
}
