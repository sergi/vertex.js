var sys = require('sys'),
http = require('http'),
path = require("path");

require("../lib/Crux/Crux");
require("../lib/NodeCrux/NodeCrux");
require("../lib/Vertex/Vertex");

UnitTest = Proto.clone().newSlots({
	protoType: "UnitTest",
}).setSlots({
	run: function()
	{
		writeln(this.protoType(), ":")
		var names = this.proto().slotNames()
		for (i = 0; i < names.length; i ++)
		{
			var name = names[i]
			if(name.beginsWith("test"))
			{
				sys.print("  ", name.after("_"))
				var r = this[name].call(this)
				if(r != null)
				{
					sys.print(r)
				}
				else
				{
					writeln(" OK")
				}
			}
		}
		//writeln("")
		//writeln("  ALL TESTS PASSED")
	},

	runSilent: function()
	{
		writeln(this.protoType(), ":")
		var names = this.proto().slotNames()
		for (i = 0; i < names.length; i ++)
		{
			var name = names[i]
			if(name.beginsWith("test"))
			{
				//writeln("  ", name)
				this[name].call(this)
				//writeln("    OK")
			}
		}
		//writeln("  ALL TESTS PASSED")
	},
})
