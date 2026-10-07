package com.example.orders.domain;

import java.math.BigDecimal;

public record OrderResponse(Long id, String customerName, BigDecimal total, String observation) {
}
