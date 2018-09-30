package org.cucumber.Flipkart;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseTestClass 
{
	ConfigFileReader reader;
	public static WebDriver driver;
	public void beforeClass()
	{
		System.setProperty("webdriver.chrome.driver", reader.getDriverPath());
		driver=new ChromeDriver();
		driver.get(reader.getApplicationUrl());
	}
	public void sendText(WebElement ele,String name)
	{
		ele.sendKeys(name);
	}
	public void btnClick(WebElement ele)
	{
		ele.click();
	}
}
