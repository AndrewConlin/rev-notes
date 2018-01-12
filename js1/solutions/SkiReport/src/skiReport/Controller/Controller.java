package skiReport.Controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import skiReport.DAO.SnowFallDAO;
import skiReport.Entities.Resort;

@RestController
public class Controller {

	@Autowired
	private SnowFallDAO dao;
	
	// test spring config
	@RequestMapping("/ping")
	public String test() {
		return "pong";
	}
	
	// gets a resort via the name of the resort
	@RequestMapping("/resorts/{resortName}")
	public Resort getResort(@PathVariable("resortName") String resortName) {
		System.out.println(resortName);
		System.out.println("in resort name");
		
		Resort getResort = new Resort();
		
		try {
			getResort = dao.getSnowfall(resortName);
		} catch (Exception e) {
			System.out.println("in controller " + e);
		}
		
		return getResort;
	}
	
	@RequestMapping("/resorts")
	public Collection<Resort> getAllResorts(){
		return dao.getAllResorts();
	}
	
}