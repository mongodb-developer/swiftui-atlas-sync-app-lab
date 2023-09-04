//
//  HabitDetailView.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import SwiftUI
import RealmSwift

struct HabitDetailView: View {
    @ObservedRealmObject var habit: Habit = Habit()
    @ObservedRealmObject var habits: Habits
    @Binding var isAddingNewHabit: Bool

    var body: some View {
        VStack {
            if isAddingNewHabit {
                Text("New Habit")
                    .font(.largeTitle)
            } else {
                Text(habit.name)
                    .font(.largeTitle)
            }

            List {
                Section {
                    TextField("Name", text: $habit.name, prompt: Text("Enter habit name"))
                    TextField("Description", text: $habit.desc, prompt: Text("Enter habit description"))
                }
            }

            Button("Save") {
                $habits.habits.append(habit)
                isAddingNewHabit = false
            }.padding()
        }
    }
}

struct HabitDetailView_Previews: PreviewProvider {
    static var previews: some View {

        let realm = realmWithData()

        return NavigationView{
            HabitDetailView(habit: Habit(name: "", desc: ""), habits: realm.objects(Habits.self).first!, isAddingNewHabit: .constant(true))
        }
    }
}
