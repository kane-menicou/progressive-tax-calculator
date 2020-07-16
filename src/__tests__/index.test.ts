import {calculateTax} from "../index";

describe('index.ts', () => {
  describe('getIncomeTax()', () => {
    describe('2020/2021', () => {
      it('should get the correct values £20,000', () => {
        expect(calculateTax(20_000, "2020/2021")).toEqual(
          {
            taxYear: "2020/2021",
            takeHomePay: 17_242,
            incomeTaxPaid: 4_018,
            incomeTaxBands: [
              {
                band: "Personal Allowance",
                taxableUpto: 12_500,
                taxableFrom: 0,
                rate: 0,
                taxedInBand: '0.00',
              },
              {
                band: "Basic rate",
                taxableUpto: 50_000.00,
                taxableFrom: 12_501.00,
                rate: 0.2,
                taxedInBand: '1499.80',
              },
              {
                band: "Higher rate",
                taxableUpto: 150_000,
                taxableFrom: 50_001.00,
                rate: 0.4,
                taxedInBand: '0.00',
              },
              {
                band: "Additional rate",
                rate: 0.45,
                taxableFrom: 150_001.00,
                taxedInBand: '0.00',
              }
            ],
          }
        );
      });
    });
  });
});
