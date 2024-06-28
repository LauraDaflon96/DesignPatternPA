
import SwiftUI

struct MVVMView: View {
    @StateObject var modelView = ModelView()
    
    var body: some View {
        VStack {
            Image(systemName: "\($modelView.curr_car.car_name)")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Button("Change curr car name", action: modelView.change_car)
        }
        .padding()
    }
}


class ModelView: ObservableObject {
    var curr_car = MainModel(car_type: "", car_age: 3, car_name: "Nivaldo")
    
    func change_car() {
        if curr_car.car_name == "Nivaldo"{
            curr_car.car_name = "Trope"
        } else {
            curr_car.car_name = "Nivaldo"
        }
    }
}

struct MainModel {
    var car_type: String
    var car_age: Int
    var car_name: String
}