import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            fulfilledOrders ++
        }
    }
        return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            
            const [, employeeId] = itemClicked.id.split("--")
            let matchingEmployee = null
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    matchingEmployee = employee.name
                    const orderCount = employeeOrders(employee)                
                    window.alert(`${matchingEmployee} sold ${orderCount} products.`)
                }
            }       
                    
            
            }
        }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

