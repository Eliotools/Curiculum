import python from '../asset/python.jpg'


function Language () {
    return(
        <div style={[styles.container]}>
            <img src={python} alt='python'/>
        </div>
    )
}


const styles = StyleSheet.create({
    container: {
    display: 'flex',
    },
})
export default Language