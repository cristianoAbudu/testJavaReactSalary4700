package com.example.orders.domain;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;

public record OrderRequest(
        @NotBlank String customerName,
        @NotNull @DecimalMin("0.01") BigDecimal total,
        @Size(max = 255) String observation
) {
}
