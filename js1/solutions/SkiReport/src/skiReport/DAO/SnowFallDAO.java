package skiReport.DAO;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.Collection;
import java.util.HashMap;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

import skiReport.Entities.Resort;

public class SnowFallDAO implements ApplicationContextAware{

	private HashMap<String, Resort> snowReport;
	private String file;
	private ApplicationContext ac;
	
	public SnowFallDAO(String file){
		this.file = file;
	}
	public SnowFallDAO(){
	}
	
	public void populateMap(ApplicationContext ac){
		snowReport = new HashMap<String, Resort>();
		
		try {
			File f = ac.getResource(file).getFile();

			FileReader in = new FileReader(f);
			BufferedReader buff = new BufferedReader(in);
			String line;
			while((line = buff.readLine()) != null){
				System.out.println(line);
				String[] splitLine = line.split(",");
				Resort r = new Resort(splitLine[0].trim(), Integer.parseInt(splitLine[1].trim()), Integer.parseInt(splitLine[2].trim()));
				snowReport.put(splitLine[0].trim(), r);
			}
			buff.close();

		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	//get resort object by resort name
	public Resort getSnowfall(String resort){
		if(snowReport.containsKey(resort)){
			return snowReport.get(resort);
		}
		else {
			return null;
		}
	}
	
	//get all resorts
	public Collection<Resort> getAllResorts(){
		return snowReport.values();
	}
	
	@Override
	public void setApplicationContext(ApplicationContext appContext)
			throws BeansException {
		this.ac = appContext;
		populateMap(appContext);
	}
	
	//Gets and Sets
	public HashMap<String, Resort> getSnowReport() {
		return snowReport;
	}

	public void setSnowReport(HashMap<String, Resort> snowReport) {
		this.snowReport = snowReport;
	}
	
	public ApplicationContext getAc() {
		return ac;
	}
	
	public void setAc(ApplicationContext ac) {
		this.ac = ac;
	}

}
