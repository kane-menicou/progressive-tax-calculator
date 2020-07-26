import calculateTax, {uk2020to2021IncomeTaxConfig} from "../index";

describe('index.ts', () => {
  describe('getIncomeTax()', () => {
    describe('with uk2020to2021IncomeTaxConfig', () => {
      it('should get the correct values £20,000', () => {
        expect(calculateTax(20_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            takeHomePay: '18500.20',
            incomeTaxPaid: '1499.80',
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

      it('should get the correct values £50,000', () => {
        expect(calculateTax(50_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            takeHomePay: '42500.20',
            incomeTaxPaid: '7499.80',
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
                taxedInBand: '7499.80',
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

      it('should get the correct values £44,391.54', () => {
        expect(calculateTax(44_391.54, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            incomeTaxPaid: "6378.11",
            takeHomePay: "38013.43",
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
                taxedInBand: '6378.11',
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

      it('should get the correct values £60,000', () => {
        expect(calculateTax(60_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            takeHomePay: '48500.60',
            incomeTaxPaid: '11499.40',
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
                taxedInBand: '7499.80',
              },
              {
                band: "Higher rate",
                taxableUpto: 150_000,
                taxableFrom: 50_001.00,
                rate: 0.4,
                taxedInBand: '3999.60',
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

      it('should get the correct values £150,000', () => {
        expect(calculateTax(150_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            takeHomePay: '102500.60',
            incomeTaxPaid: '47499.40',
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
                taxedInBand: '7499.80',
              },
              {
                band: "Higher rate",
                taxableUpto: 150_000,
                taxableFrom: 50_001.00,
                rate: 0.4,
                taxedInBand: '39999.60',
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

      it('should get the correct values £200,000', () => {
        expect(calculateTax(200_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            takeHomePay: '130001.05',
            incomeTaxPaid: '69998.95',
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
                taxedInBand: '7499.80',
              },
              {
                band: "Higher rate",
                taxableUpto: 150_000,
                taxableFrom: 50_001.00,
                rate: 0.4,
                taxedInBand: '39999.60',
              },
              {
                band: "Additional rate",
                rate: 0.45,
                taxableFrom: 150_001.00,
                taxedInBand: '22499.55',
              }
            ],
          }
        );
      });
    });
  });
});
