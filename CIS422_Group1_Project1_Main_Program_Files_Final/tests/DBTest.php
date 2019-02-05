<!-- 
    This file is Database test file for testing database connection and differnet querys work.
    This file is written by Shuijian Zhang and Jarvis Dong
    FrameWork is phpunit

    Notice: xml query file testsquery can't comment since it'll cause error when testing.
    so comments here:
    testsquery is a import query file for getDataSet() function
    testsqury is written by Shuijian Zhang and Jarvis Dong
-->

<?php
use PHPUnit\Framework\TestCase;
use PHPUnit\DbUnit\TestCaseTrait;

class DBTest extends TestCase
{
    use TestCaseTrait;
    /**
     * @return PHPUnit_Extensions_Database_DB_IDatabaseConnection
     */

    private $conn = null;

    public function getConnection() {
        if ($this->conn === null) {
            try {
                $dbname = 'calenda_group1'; //DB name
                $host = 'ix.cs.uoregon.edu'; //Host
                $port = '3088';
                $pdo = new PDO("mysql:host=$host;dbname=$dbname;port=$port", 'shuijianz', 'oP78l400'); //Connection with func PDO
                return $this->createDefaultDBConnection($pdo, ':memory:'); //return connection status
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        }
        return $this->conn;
    }

    /**
     * @return PHPUnit_Extensions_Database_DataSet_IDataSet
     */
    public function getDataSet() //input dataset with xml file
    {
        return $this->createFlatXMLDataSet('testsquery.xml'); //return test result
    }

    public function testGetRowCount()//test table row count, Error here
    {
        $this->assertEquals(4, $this->getConnection()->getRowCount('Calendar'),"Above Row Count");//test table row count, error with Above Row Count
    }

    public function testComplexQuery()//test query, Error here
    {
        $queryTable = $this->getConnection()->createQueryTable(//connect table
            'Calendar', 'SELECT date,description,start_time, end_time, title, priority, categories from Calendar'
        );
        $expectedTable = $this->getDataSet()
                              ->getTable("Calendar");
        $this->assertTablesEqual($expectedTable, $queryTable);//test query
    }

    public function testAddEntry()//test table status, Error here
    {

        $queryTable = $this->getConnection()->createQueryTable(//connect table
            'Calendar', 'SELECT date,description,start_time, end_time, title, priority, categories from Calendar'
        );
        $expectedTable = $this->getDataSet()
                              ->getTable("Calendar");
        $this->assertTablesEqual($expectedTable, $queryTable);//test table status
    }

    function testReadDatabase() {//test table add, remove function
        // fixtures auto loaded, let's read some data
        $conn = $this->getConnection()->getConnection();
        $query = $conn->query('SELECT * FROM Calendar');
        $results = $query->fetchAll(PDO::FETCH_COLUMN);
        $this->assertEquals(4, count($results));

        $conn->query('TRUNCATE Calendar');// now delete them

        $query = $conn->query('SELECT * FROM Calendar'); //repeat again
        $results = $query->fetchAll(PDO::FETCH_COLUMN);
        $this->assertEquals(0, count($results));//test if empty

    }
}
?>