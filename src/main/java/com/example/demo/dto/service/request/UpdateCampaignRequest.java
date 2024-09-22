package com.example.demo.dto.service.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UpdateCampaignRequest {
    String title;
    String description;
    Double goalAmount;
    String startDate;
    String endDate;
}
