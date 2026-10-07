import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import OrderForm from '../components/OrderForm';

describe('OrderForm', () => {
    it('renders the order fields', () => {
        render(<OrderForm onCreated={() => {
        }}/>);
        expect(screen.getByLabelText('Cliente')).toBeInTheDocument();
        expect(screen.getByLabelText('Total')).toBeInTheDocument()
        expect(screen.getByLabelText('Observacao')).toBeInTheDocument()
    })
})
