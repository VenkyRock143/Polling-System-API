
module.exports.home = async function (req, res) {
    try {
        res.render('_home');
    } catch (error) {
        console.log("error in rendering home", error);
    }
}