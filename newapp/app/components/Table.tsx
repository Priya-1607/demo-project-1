import React,{Component} from "react"
const $=require('jquery')
$.DataTable=require('datatables.net')
export class Table extends Component<any, any>{
    public el: any;

    componentDidMount() {

        console.log(this.el)
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data:this.props.data,
                columns:[
                    {
                        title:"Name"
                    },{
                    title:"Position"
                    },
                    {
                        title:"Office",
                    },
                    {
                        title: "Extn."
                    },{
                    title: "Start date"
                    },{
                    title: "Salary"
                    }
                ]
            }
        )
    }
    componentWillUnmount() {
    }
    render() {
        return <div>
            <table className="display" width="100%" ref={(el)=>this.el=el}></table>
        </div>
    }
}