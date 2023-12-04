export type Commitment =
  | PrivateEquity
  | PrivateDebt
  | RealEstate
  | Infrastructure
  | NaturalResources
  | HedgeFunds;

export type PrivateEquity = {
  committedMn: string;
  coreIndustries: string;
  domicile: string;
  fundCurrency: string;
  fundId: string;
  fundManagerId: string;
  fundManagerName: string;
  fundName: string;
  fundSizeMn: string;
  fundType: string;
  industryVerticals: string;
  investorId: string;
  investorName: string;
  managerExperience: string;
  vintage: string;
};

export type PrivateDebt = {
  benchmarkLocations: string;
  committedMn: string;
  coreIndustries: string;
  domicile: string;
  fundCurrency: string;
  fundId: string;
  fundManagerId: string;
  fundManagerName: string;
  fundName: string;
  fundSizeMn: string;
  fundType: string;
  industryVerticals: string;
  investorId: string;
  investorName: string;
  managerExperience: string;
  vintage: string;
};

export type RealEstate = {
  benchmarkLocations: string;
  committedMn: string;
  domicile: string;
  fundCurrency: string;
  fundId: string;
  fundManagerId: string;
  fundManagerName: string;
  fundName: string;
  fundSizeMn: string;
  fundType: string;
  investorId: string;
  investorName: string;
  managerExperience: string;
  primarySector: string;
  vintage: string;
};

export type Infrastructure = {
  benchmarkLocations: string;
  committedMn: string;
  fundCurrency: string;
  fundId: string;
  fundManagerId: string;
  fundManagerName: string;
  fundName: string;
  fundSizeMn: string;
  fundType: string;
  investorId: string;
  investorName: string;
  managerExperience: string;
  primarySector: string;
  vintage: string;
};

export type NaturalResources = {
  benchmarkLocations: string;
  committedMn: string;
  fundCurrency: string;
  fundId: string;
  fundManagerId: string;
  fundManagerName: string;
  fundName: string;
  fundSizeMn: string;
  investorId: string;
  investorName: string;
  managerExperience: string;
  vintage: string;
};

export type HedgeFunds = {
  asAtDate: string;
  coreStrategy: string;
  currentRedeemed: string;
  fundAumDate: string;
  fundAumMn: string;
  fundId: string;
  fundManagerId: string;
  fundManagerName: string;
  fundName: string;
  fundStructure: string;
  fundType: string;
  inceptionDate: string;
  initialInvestmentDate: string;
  initialInvestmentSize: string;
  investorId: string;
  investorName: string;
  mostRecentValuation: string;
  mostRecentValuationDate: string;
  reportedFundSizeCurrency: string;
  twelveMonthsReturn: string;
};
