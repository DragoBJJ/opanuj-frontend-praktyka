import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an error if first name is missing', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name is required');
    });

    test('should return an error if last name is missing', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name is required');
    });

    test('should return an error if age is not a number', () => {
        const errors = formValidator('John', 'Doe',   "sad");
        expect(errors).toContain('Age must be a number');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test("should return true if all data is correct valdiate", ()=> {
        const errors = formValidator('John', 'Doe', 1);
        expect(errors).toHaveLength(0);
    })

    test("should return an error if firstName or lastname don't have minimun one char", () => {
        const errors = formValidator('John', '', 1);
        expect(errors).toContain("First name and Last name should have minimum 1 char");
    })

    test("should return an error if firstName or lastname don't have minimun one char", ()=> {    
        const errors = formValidator('', 'Doe', 1);
        expect(errors).toContain("First name and Last name should have minimum 1 char");
    })
});