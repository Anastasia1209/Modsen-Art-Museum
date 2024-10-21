import { searchValidationSchema } from './validationSchema';

describe('searchValidationSchema', () => {
  test('validates successfully with a valid query', async () => {
    const validData = { query: 'ValidQuery' };
    
    await expect(searchValidationSchema.validate(validData)).resolves.toBe(validData);
  });

  test('fails validation when query is empty', async () => {
    const invalidData = { query: '' };

    await expect(searchValidationSchema.validate(invalidData))
      .rejects
      .toThrow('Запрос не может быть пустым');
  });

  test('fails validation when query is less than 3 characters', async () => {
    const invalidData = { query: 'ab' };

    await expect(searchValidationSchema.validate(invalidData))
      .rejects
      .toThrow('Запрос должен содержать минимум 3 символа');
  });

  test('fails validation when query contains invalid characters', async () => {
    const invalidData = { query: 'Invalid@Query!' };

    await expect(searchValidationSchema.validate(invalidData))
      .rejects
      .toThrow('Запрос содержит недопустимые символы');
  });
});
