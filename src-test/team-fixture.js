TeamTest = TestCase("TeamTest");

TeamTest.prototype.testInitializer = function() {
  var team = Team();
  assertEquals(0, team.people().count());
};