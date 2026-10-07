package com.example.orders.service;

import com.example.orders.domain.Order;
import com.example.orders.domain.OrderRequest;
import com.example.orders.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    @Mock
    OrderRepository repository;
    @InjectMocks
    OrderService service;

    @Test
    void shouldCreateOrder() {
        Order saved = new Order(
            "Maria",
            new BigDecimal("100.00"),
            "observation"
        );
        when(repository.save(any(Order.class))).thenReturn(saved);
        var result = service.create(
            new OrderRequest(
                "Maria",
                new BigDecimal("100.00"),
                "observation"
            )
        );
        assertEquals("Maria", result.customerName());
        assertEquals(new BigDecimal("100.00"), result.total());
        assertEquals("observation", result.observation());
        verify(repository).save(any(Order.class));
    }
}