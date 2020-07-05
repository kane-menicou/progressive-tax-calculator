import {getIncomeTax} from "../index";

describe('index.ts', () => {
  describe('getIncomeTax()', () => {
    describe('2020/2021', () => {
      it('should get the correct values £20,000', () => {
        expect(getIncomeTax(20000, "2020/2021")).toEqual(
          {
            taxYear: "2020/2021",
            takeHomePay: '17242',
            // nationalInsuranceContribution: 1260,
            incomeTaxPaid: '4018',
            incomeTaxBands: [
              {
                band: "Personal Allowance",
                taxableUpto: '12500',
                taxableFrom: '0',
                rate: '0',
                taxedInBand: '0',
              },
              {
                band: "Basic rate",
                taxableUpto: '50000.00',
                taxableFrom: '12501.00',
                rate: '0.2',
                taxedInBand: '1499.80',
              },
              {
                band: "Higher rate",
                taxableUpto: '150000',
                taxableFrom: '50000.01',
                rate: '0.4',
                taxedInBand: '0',
              },
              {
                band: "Additional rate",
                rate: '0.45',
                taxableFrom: '150000.01',
                taxedInBand: '0',
              }
            ],
          }
        );
      });

      it('should get the correct values £50,000', () => {
        expect(getIncomeTax(20000, "2020/2021")).toEqual(
          {
            taxYear: "2020/2021",
            takeHomePay: 37642,
            // nationalInsuranceContribution: 4860,
            incomeTaxPaid: 7498,
            incomeTaxBands: [
              {
                band: "Personal Allowance",
                taxableUpto: 12500,
                taxableFrom: 0,
                rate: 0,
                taxedInBand: 0,
              },
              {
                band: "Basic rate",
                taxableUpto: 50000,
                taxableFrom: 12500.01,
                rate: 0.20,
                taxedInBand: 7498,
              },
              {
                band: "Higher rate",
                taxableUpto: 150000,
                taxableFrom: 50000.01,
                rate: 0.40,
                taxedInBand: 0,
              },
              {
                band: "Additional rate",
                rate: 0.45,
                taxableFrom: 150000.01,
                taxedInBand: 0,
              }
            ],
          }
        );
      });
    });
  });
});
