//
//  ContentView.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import SwiftUI
import RealmSwift

struct MainView: View {
    @ObservedResults(Habits.self) var allHabitGroups

    var body: some View {
        if let habits = allHabitGroups.first {
            TabView {
                DaysView()
                        .tabItem {
                            Image(systemName: "calendar")
                            Text("Today")
                        }
                ConfigView(habits: habits)
                    .tabItem {
                        Image(systemName: "wrench.and.screwdriver")
                        Text("Config")
                    }
            }
        } else {
            ProgressView()
                .onAppear {
                    $allHabitGroups.append(Habits())
                }
        }

    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        MainView()
    }
}
