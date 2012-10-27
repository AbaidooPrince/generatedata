<?php


class DataType_Email extends DataTypePlugin {
	protected $dataTypeName = "Email";
	protected $dataTypeFieldGroup = "human_data";
	protected $dataTypeFieldGroupOrder = 30;
	private $words;
	private $numWords;

	public function __construct($runtimeContext) {
		parent::__construct($runtimeContext);
		if ($runtimeContext == "generation") {
			$this->words = Utils::getLipsum();
			$this->numWords = count($this->words);
		}
	}

	public function generate($rowNum, $placeholderStr, $existingRowData) {
		// prefix
		$numPrefixWords = rand(1, 3);
		$offset = rand(0, $this->numWords - ($numPrefixWords + 1));
		$words = array_slice($this->words, $offset, $numPrefixWords);
		$words = preg_replace("/[,.:]/", "", $words);
		$prefix = join(".", $words);

		// domain
		$numDomainWords = rand(1, 3);
		$offset = rand(0, $this->numWords - ($numDomainWords + 1));
		$words = array_slice($this->words, $offset, $numDomainWords);
		$words = preg_replace("/[,.:]/", "", $words);
		$domain = join("", $words);

		// suffix
		$validSuffixes = array("edu", "com", "org", "ca", "net", "co.uk");
		$suffix = $validSuffixes[rand(0, count($validSuffixes)-1)];

		return "$prefix@$domain.$suffix";
	}

	public function getExportTypeInfo($exportType, $options) {
		$info = "";
		switch ($exportType) {
			case "sql":
				if ($options == "Oracle") {
					$info = "varchar2(255) default NULL";
				} else if ($options == "MySQL" || $options == "SQLite") {
					$info = "varchar(255) default NULL";
				}
				break;
		}

		return $info;
	}
}