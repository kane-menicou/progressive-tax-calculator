import calculateAnnualTax, {createUk2020To2021NationalInsuranceConfig, uk2020to2021IncomeTaxConfig} from "../index";
import each from "jest-each";

describe('index.ts', () => {
  describe('getIncomeTax()', () => {
    each(
      [
        ['A'],
        ['a'],
        [' A'],
        ['a  '],
      ]
    ).describe('with createUk2020To2021NationalInsuranceConfig("%s")', (categoryLetter: string) => {
      it('should get the correct values £52,000', () => {
        expect(calculateAnnualTax(52_000, createUk2020To2021NationalInsuranceConfig(categoryLetter))).toEqual(
          {
            taxPaid: '4900.42',
            bands: [
              {
                band: "£120 to £183 a week",
                taxableUpto: 9_516.51,
                taxableFrom: 0,
                rate: 0,
                taxedInBand: '0.00',
              },
              {
                band: "£183.01 to £962 a week",
                taxableUpto: 50_024.00,
                taxableFrom: 9_516.52,
                rate: 0.12,
                taxedInBand: '4860.90',
              },
              {
                band: "Over £962 a week",
                taxableFrom: 50_024.00,
                rate: 0.02,
                taxedInBand: '39.52',
              },
            ],
          }
        );
      });

      it('should get the correct values £49,431.41', () => {
        expect(calculateAnnualTax(49_431.41, createUk2020To2021NationalInsuranceConfig(categoryLetter))).toEqual(
          {
            taxPaid: '4789.79',
            bands: [
              {
                band: "£120 to £183 a week",
                taxableUpto: 9_516.51,
                taxableFrom: 0,
                rate: 0,
                taxedInBand: '0.00',
              },
              {
                band: "£183.01 to £962 a week",
                taxableUpto: 50_024.00,
                taxableFrom: 9_516.52,
                rate: 0.12,
                taxedInBand: '4789.79',
              },
              {
                band: "Over £962 a week",
                taxableFrom: 50_024.00,
                rate: 0.02,
                taxedInBand: '0.00',
              },
            ],
          }
        );
      });
    });

    each(
      [
        ['B'],
        ['b'],
        [' B'],
        ['b  '],
      ]
    ).describe('with createUk2020To2021NationalInsuranceConfig("%s")', (categoryLetter: string) => {
      it('should get the correct values £52,000', () => {
        expect(calculateAnnualTax(52_000, createUk2020To2021NationalInsuranceConfig(categoryLetter))).toEqual(
          {
            taxPaid: '2409.21',
            bands: [
              {
                band: "£120 to £183 a week",
                taxableUpto: 9_516.51,
                taxableFrom: 0,
                rate: 0,
                taxedInBand: '0.00',
              },
              {
                band: "£183.01 to £962 a week",
                taxableUpto: 50_024.00,
                taxableFrom: 9_516.52,
                rate: 0.0585,
                taxedInBand: '2369.69',
              },
              {
                band: "Over £962 a week",
                taxableFrom: 50_024.00,
                rate: 0.02,
                taxedInBand: '39.52',
              },
            ],
          }
        );
      });

      it('should get the correct values £49,431.41', () => {
        expect(calculateAnnualTax(49_431.41, createUk2020To2021NationalInsuranceConfig(categoryLetter))).toEqual(
          {
            taxPaid: '2335.02',
            bands: [
              {
                band: "£120 to £183 a week",
                taxableUpto: 9_516.51,
                taxableFrom: 0,
                rate: 0,
                taxedInBand: '0.00',
              },
              {
                band: "£183.01 to £962 a week",
                taxableUpto: 50_024.00,
                taxableFrom: 9_516.52,
                rate: 0.0585,
                taxedInBand: '2335.02',
              },
              {
                band: "Over £962 a week",
                taxableFrom: 50_024.00,
                rate: 0.02,
                taxedInBand: '0.00',
              },
            ],
          }
        );
      });
    });

    describe('with uk2020to2021IncomeTaxConfig', () => {
      it('should get the correct values £20,000', () => {
        expect(calculateAnnualTax(20_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            taxPaid: '1499.80',
            bands: [
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
        expect(calculateAnnualTax(50_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            taxPaid: '7499.80',
            bands: [
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
        expect(calculateAnnualTax(44_391.54, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            taxPaid: "6378.11",
            bands: [
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
        expect(calculateAnnualTax(60_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            taxPaid: '11499.40',
            bands: [
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
        expect(calculateAnnualTax(150_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            taxPaid: '47499.40',
            bands: [
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
        expect(calculateAnnualTax(200_000, uk2020to2021IncomeTaxConfig)).toEqual(
          {
            taxPaid: '69998.95',
            bands: [
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
