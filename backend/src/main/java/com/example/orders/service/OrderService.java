package com.example.orders.service;

import com.example.orders.domain.*;
import com.example.orders.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    public List<OrderResponse> findAll() {
        return repository.findAll().stream().map(this::toResponse).toList();
    }

    public OrderResponse create(OrderRequest request) {
        return toResponse(repository.save(new Order(request.customerName(), request.total(), request.observation())));
    }

    private OrderResponse toResponse(Order order) {
        return new OrderResponse(order.getId(), order.getCustomerName(), order.getTotal(), order.getObservation());
    }
}
