package skiReport.Entities;

public class Resort {
	private String resortName;
	private int snowBase;
	private int numChairs;
	
	public Resort(){}
	
	public Resort(String resortName, int snowBase, int numChairs) {
		super();
		this.resortName = resortName;
		this.snowBase = snowBase;
		this.numChairs = numChairs;
	}

	//gets and sets
	public String getResortName() {
		return resortName;
	}
	public void setResortName(String resortName) {
		this.resortName = resortName;
	}
	public int getSnowBase() {
		return snowBase;
	}
	public void setSnowBase(int snowBase) {
		this.snowBase = snowBase;
	}
	public int getNumChairs() {
		return numChairs;
	}

	public void setNumChairs(int numChairs) {
		this.numChairs = numChairs;
	}

	@Override
	public String toString() {
		return "Resort [resortName=" + resortName + ", snowBase=" + snowBase
				+ "]";
	}
	
}
