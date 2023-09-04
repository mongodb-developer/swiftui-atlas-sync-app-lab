//
//  TrackDailyHabitsView.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 25/8/23.
//

import SwiftUI
import RealmSwift

struct TrackDailyHabitsView: View {
    @ObservedRealmObject var day: Day

    var body: some View {
        List {
            Section {
                DatePicker(
                    "Review Date",
                    selection: $day.date,
                    displayedComponents: [.date]
                )
            }

            Section {
                ForEach($day.habits) { habit in
                    HStack {
                        VStack {
                            Text(habit.name.wrappedValue)
                            Text(habit.desc.wrappedValue)
                        }
                        Toggle("", isOn: habit.done)
                    }
                }
            }
        }
        .scrollContentBackground(.hidden)
        .navigationTitle("\(day.date.formatted(date: .numeric, time: .omitted))")
    }
}

struct TrackDailyHabitsView_Previews: PreviewProvider {
    static var previews: some View {
        let day = Day.createDayWithHabitsInRealm(realm: realmWithData())

        NavigationStack {
            TrackDailyHabitsView(day: day)
        }
    }
}
