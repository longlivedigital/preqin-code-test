"use client";

import useFetch from "@/app/utils/useFetch";
import {
  Flex,
  Heading,
  Select,
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
import { ChangeEvent, useState } from "react";
import { AssetType } from "@/app/types/AssetType";
import { ErrorMessage } from "@/app/ErrorMessage";

const ASSET_TYPES: AssetType[] = [
  { code: "pe", title: "Private Equity" },
  { code: "pd", title: "Private Debt" },
  { code: "re", title: "Real Estate" },
  { code: "inf", title: "Infrastructure" },
  { code: "nr", title: "Natural Resources" },
  { code: "hf", title: "Hedge Funds" },
];

export default function Investors({ params }: { params: { id: string } }) {
  const {
    data: dataInvestor,
    loading: loadingInvestor,
    error: errorInvestor,
  } = useFetch({
    url: "/api/Investor",
    query: { firmID: params.id },
  });

  const {
    data: dataCommitments,
    loading: loadingCommitments,
    error: errorCommitments,
    fetchData: fetchDataCommitments,
  } = useFetch({
    autoFetch: false,
  });

  const assetOnChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    fetchDataCommitments({
      url: `/api/Investor/commitment/${e.target.value}/${params.id}`,
    });
  };

  if (errorInvestor || errorCommitments) {
    return (
      <ErrorMessage
        title="There was a problem loading investor data"
        message={errorInvestor?.message || errorCommitments?.message}
      />
    );
  }
  console.log({ loadingInvestor, loadingCommitments });

  const isLoading = loadingInvestor || loadingCommitments;

  return (
    <Flex height="100vh" alignContent="center" justifyContent="center">
      <Stack background="gray.100" padding="10px">
        <Heading>Investor: {dataInvestor?.data?.[0].firmName}</Heading>
        <Select
          onChange={assetOnChange}
          placeholder="Select an Asset Type"
          disabled={loadingInvestor}
        >
          {ASSET_TYPES.map((asset) => (
            <option key={asset.code} value={asset.code}>
              {asset.title}
            </option>
          ))}
        </Select>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>List of Assets</TableCaption>
            <Thead>
              <Tr>
                <Th>FundId</Th>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Size</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading && (
                <Tr>
                  <Td colSpan={4}>
                    <Spinner size="xl" />
                  </Td>
                </Tr>
              )}

              {!isLoading &&
                dataCommitments?.data?.map((commitment) => (
                  <Tr key={commitment.fundId}>
                    <Td>{commitment.fundId}</Td>
                    <Td>{commitment.fundName}</Td>
                    <Td>
                      {"fundType" in commitment ? commitment.fundType : "-"}
                    </Td>
                    <Td>
                      {"fundSizeMn" in commitment && commitment.fundSizeMn
                        ? `${commitment.fundSizeMn}M`
                        : "-"}
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
