//
//  ConfigView.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import SwiftUI
import RealmSwift

struct ConfigView: View {
    @ObservedRealmObject var habits: Habits
    @State private var isShowingSheet = false

    var body: some View {
        NavigationStack {
            List {
                ForEach(habits.habits) { habit in
                    NavigationLink(destination: HabitDetailView(habit: habit, habits: habits, isAddingNewHabit: $isShowingSheet)) {
                        HabitCellView(habit: habit)
                    }
                }
                .onDelete(perform: $habits.habits.remove)
                .onMove(perform: $habits.habits.move)
            }
            .scrollContentBackground(.hidden)
            .navigationBarItems(trailing: EditButton())
            .navigationTitle("Habits")
            .toolbar {
                ToolbarItem(placement: .bottomBar) {
                    Button(action: {
                        isShowingSheet.toggle()
                    }) {
                        Image(systemName: "plus.circle.fill")
                            .resizable()
                            .frame(width: 50.0, height: 50.0)
                    }
                }
            }
            .sheet(isPresented: $isShowingSheet) {
                HabitDetailView(habits: habits, isAddingNewHabit: $isShowingSheet)
            }
        }
    }
}

struct HabitCellView: View {
    @ObservedRealmObject var habit: Habit

    var body: some View {
        VStack(alignment: .leading) {
            Text("\(habit.name)")
            Text("\(habit.desc)")
        }.padding()
    }
}

struct ConfigView_Previews: PreviewProvider {
    static var previews: some View {
        let realm =  realmWithData()
        return NavigationView {
            ConfigView(habits: realm.objects(Habits.self).first!)
                .environment(\.realm, realm)
        }
    }
}
