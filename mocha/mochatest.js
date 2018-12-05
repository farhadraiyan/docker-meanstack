const should=require("should");

describe("calculator", function()
{
    describe("when use synchroniously", function()
    {
        it("should add two numbers correctly",function()
        {
            (2+3).should.be.equal(5);            

        });
        
    });
});
