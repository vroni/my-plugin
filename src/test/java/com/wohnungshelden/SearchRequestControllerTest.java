package com.wohnungshelden;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.wohnungshelden.controller.SearchRequestController;
import com.wohnungshelden.model.SearchRequest;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class SearchRequestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SearchRequestController searchRequestController;

    private SearchRequest request;

    private String newRequestJSON = "{\"firstName\": \"Bruce\"," +
            "\"lastName\": \"Wayne\", " +
            "\"email\": \"bruce@wayne-enterprise.com\", " +
            "\"appartmentSize\": 230, " +
            "\"appartmentRent\": 2500, " +
            "\"districts\": []}";

    @Before
    public void setUp() {
        this.request = new SearchRequest(
                "Bruce",
                "Wayne",
                "bruce@wayne-enterprise.com",
                230.0,
                2500.0,
                new HashSet<>());

        List<SearchRequest> returnList = Arrays.asList(this.request);
        when(this.searchRequestController.findAll()).thenReturn(returnList);
        when(this.searchRequestController.create(any())).thenReturn(this.request);
    }

    @Test
    public void findAllShouldReturnOkAndList() throws Exception {

        this.mockMvc.perform(get("/findAll")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].firstName", is(this.request.getFirstName())));
    }

    @Test
    public void createShouldCreateNewObject() throws Exception {

        this.mockMvc.perform(post("/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(newRequestJSON))
                .andExpect(status().isOk());
    }

}
