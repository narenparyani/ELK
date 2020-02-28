package com.billdesk.getResp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.nio.client.HttpAsyncClientBuilder;
import org.apache.http.nio.entity.NStringEntity;
import org.apache.http.util.EntityUtils;
import org.elasticsearch.client.Request;
import org.elasticsearch.client.Response;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder.HttpClientConfigCallback;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("/getData")
public class MyResource {
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String postRest(InputStream incomingData) {
		StringBuilder builder = new StringBuilder();
		try {
			BufferedReader in = new BufferedReader(new InputStreamReader(incomingData));
			String line1 = null;
			while ((line1 = in.readLine()) != null) {
				builder.append(line1);
				
			}
		} catch (Exception e) {
			System.out.println("Error Parsing: - ");
		}
		
		String postdata=builder.toString();
		System.out.println("Data Received: " + postdata);
		
		
//		final CredentialsProvider credentialsProvider =
//			    new BasicCredentialsProvider();
//			credentialsProvider.setCredentials(AuthScope.ANY,
//			    new UsernamePasswordCredentials("elastic", "elastic"));
		
		
		
		RestClient restClient = RestClient.builder(
			    new HttpHost("localhost", 9200, "http")).build();
		
		Request request = new Request(
			    "GET",  
			    "http://localhost:9200/directpay*/_search?size=0");
		
		request.setEntity(new NStringEntity(
				postdata,
		        ContentType.APPLICATION_JSON));
		try {
			Response response = restClient.performRequest(request);
			String responseBody = EntityUtils.toString(response.getEntity()); 
			System.out.println(responseBody);
			
			
			return responseBody;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Error";
		}
		
	}
	
	
}
