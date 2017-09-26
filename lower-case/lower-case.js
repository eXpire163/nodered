module.exports = function(RED) {
    function MotorOutNode(config) {
        RED.nodes.createNode(this,config);
        this.motornumber = n.motornumber;
        this.motordir = n.motordir;
        var node = this;
        node.on('input', function(msg) {
            msg.payload = this.motornumber+";"+n.motordir+";1.0";
            node.send(msg);
        });
    }
    RED.nodes.registerType("motor-out",MotorOutNode);
}