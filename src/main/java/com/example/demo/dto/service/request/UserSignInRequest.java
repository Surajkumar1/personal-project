package com.example.demo.dto.service.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserSignInRequest {
    String userName;
    String password;
}
