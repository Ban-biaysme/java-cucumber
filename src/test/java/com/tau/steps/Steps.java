package com.tau.steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.tau.Base.BaseUtil;
import static org.junit.Assert.*;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import utility.Highlighter;

//ctrl+shift+o - to import required library

public class Steps extends BaseUtil{
	
	private BaseUtil baseUtil;
	
	public Steps(BaseUtil util) {
		this.baseUtil=util;
	}
	
	private WebDriver driver;
	
	@Before()
	public void setup() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver ();
		driver.manage().window().maximize();
		
		System.out.println("1. Open the web browser");
	}

	
	@Given("I am in the login page of the Para Bank Application")
	public void i_am_in_the_login_page_of_the_Para_Bank_Application() {		
		driver.get("https://parabank.parasoft.com/parabank/index.htm");
		
		System.out.println("2. Open the web site");
	}

	@When("I enter valid {string} and {string} with {string}")
	public void i_enter_valid_credentials(String username, String password, String userFullName) {
		
		baseUtil.userFullName = userFullName;
		
		WebElement userName = driver.findElement(By.name("username"));
		Highlighter.highlightElement(driver, userName);
		userName.sendKeys(username);
	 
		WebElement pwd = driver.findElement(By.name("password"));
		Highlighter.highlightElement(driver, pwd);
		pwd.sendKeys(password);
		
		WebElement buttonLogin = driver.findElement(By.name("username"));
		Highlighter.highlightElement(driver, buttonLogin);
		buttonLogin.submit();
		
		System.out.println("3. Sign In");
	}

	@Then("I should be taken to the Overview page")
	public void i_should_be_taken_to_the_Overview_page() throws Exception {
		
		Thread.sleep(3000);
		WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='rightPanel']/div/div/h1")));
	    
		WebElement overviewPage = driver.findElement(By.xpath("//*[@id='rightPanel']/div/div/h1"));
		Highlighter.highlightElement(driver, overviewPage);
		//overviewPage.isDisplayed();
		String actualuserFullName = driver.findElement(By.className("smallText")).getText().toString();
		assertTrue(actualuserFullName, actualuserFullName.contains(baseUtil.userFullName));
		
		WebElement buttonLogout = driver.findElement(By.linkText("Log Out"));
		Highlighter.highlightElement(driver, buttonLogout);
		buttonLogout.click();
		
		System.out.println("4. View Overview page");
			
	}
	
	@After()
	public void quitBrowser() {
	    driver.quit();
	    System.out.println("5.Logout and close the browser");
	}
}
