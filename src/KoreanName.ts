export interface KoreanName {
  firstName: [
    {
      Syllable?: number;
      FirstName: string;
      'Masculine:Feminine': number;
      R_FirstName: string;
    }
  ];

  lastName: [
    {
      LastName: string;
      R_LastName: string;
    }
  ];
}
