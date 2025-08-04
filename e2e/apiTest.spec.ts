import { test, expect, APIRequestContext } from '@playwright/test';

import { faker } from '@faker-js/faker';

test.describe('PokéAPI Automation Test (L3)', () => {
    
    test('Validate Pikachu API Data', async ({request}) => {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon/pikachu');

  // 1. Validate response status is 200
  expect(response.status()).toBe(200);

  // Parse response body
  const responseBody = await response.json();

  // 2. Validate name is "pikachu"
  expect(responseBody.name).toBe('pikachu');

  // 3. Validate ID is 25
  expect(responseBody.id).toBe(25);

  // 4. Validate height is 4 (decimeters)
  expect(responseBody.height).toBe(4);

  // 5. Validate Pikachu has at least two abilities
  expect(responseBody.abilities.length).toBeGreaterThanOrEqual(2);
    });

    test('Validate a Random Pokémon Type Information', async ({request}) => {
          const randomId = Math.floor(Math.random() * 151) + 1;

  // Make GET request to fetch Pokémon data
  const response = await request.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

  // Validate response status is 200
  expect(response.status()).toBe(200);

  // Parse response body
  const data = await response.json();

  // Validate that at least one type exists
  const types = data.types;
  expect(types.length).toBeGreaterThanOrEqual(1);

  // Validate formatting of each type entry
  for (const typeEntry of types) {
    expect(typeEntry).toHaveProperty('slot');
    expect(typeEntry).toHaveProperty('type');
    expect(typeEntry.type).toHaveProperty('name');
    expect(typeof typeEntry.type.name).toBe('string');
  }

  // If there are two types, check both are distinct and valid
  if (types.length === 2) {
    expect(types[0].slot).not.toBe(types[1].slot);
    expect(types[0].type.name).not.toBe(types[1].type.name);
  }

  // Optional: Log the Pokémon name and types for visibility
  console.log(`Pokémon: ${data.name}`);
  console.log(`Types: ${types.map(t => t.type.name).join(', ')}`);

    });

    test('Validate Non-Existent Pokémon', async ({request}) => {
      const fakePokemonName = faker.word.sample().toLowerCase().replace(/\s+/g, '');

  // Send GET request to PokeAPI
  const response = await request.get(`https://pokeapi.co/api/v2/pokemon/${fakePokemonName}`);

  // Expect a 404 Not Found response
  expect(response.status()).toBe(404);

  // Log the name and outcome for debugging
  console.log(`Tested with fake Pokémon name: "${fakePokemonName}"`);
  console.log(`Response status: ${response.status()} (Expected 404)`);
    });

  });